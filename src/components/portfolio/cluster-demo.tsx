"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, RotateCcw, Zap } from "lucide-react";

type Phase = "healthy" | "electing" | "recovered";

export default function ClusterDemo() {
  const [phase, setPhase] = useState<Phase>("healthy");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  function disrupt() {
    if (phase === "electing") return;
    if (phase === "recovered") {
      setPhase("healthy");
      return;
    }
    setPhase("electing");
    timer.current = setTimeout(() => setPhase("recovered"), 1200);
  }

  const status =
    phase === "healthy"
      ? "All nodes in sync"
      : phase === "electing"
        ? "Leader offline. Electing…"
        : "New leader. Quorum restored.";

  return (
    <div className={`cluster-panel phase-${phase}`}>
      <div className="cluster-topline mono">
        <span>
          <i className="status-dot" /> SYSTEM SKETCH / 001
        </span>
        <span>RAFT</span>
      </div>
      <div
        className="cluster-canvas"
        role="img"
        aria-label={`Illustrative three-node Raft cluster. ${status}`}
      >
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-inner" />
        <svg className="cluster-lines" viewBox="0 0 440 290" aria-hidden="true">
          <path className="connection connection-a" d="M220 66 L102 222" />
          <path className="connection connection-b" d="M220 66 L338 222" />
          <path className="connection connection-c" d="M102 222 L338 222" />
          <circle className="signal signal-a" r="3">
            <animateMotion
              dur="2.7s"
              repeatCount="indefinite"
              path="M220 66 L102 222"
            />
          </circle>
          <circle className="signal signal-b" r="3">
            <animateMotion
              dur="2.7s"
              begin=".5s"
              repeatCount="indefinite"
              path="M220 66 L338 222"
            />
          </circle>
        </svg>
        <div
          className={`cluster-node node-one ${phase === "healthy" ? "is-leader" : "is-offline"}`}
        >
          <span className="node-core">01</span>
          <span className="node-label">
            {phase === "healthy" ? "LEADER" : "OFFLINE"}
          </span>
        </div>
        <div
          className={`cluster-node node-two ${phase === "recovered" ? "is-leader" : ""}`}
        >
          <span className="node-core">02</span>
          <span className="node-label">
            {phase === "recovered"
              ? "LEADER"
              : phase === "electing"
                ? "CANDIDATE"
                : "FOLLOWER"}
          </span>
        </div>
        <div className="cluster-node node-three">
          <span className="node-core">03</span>
          <span className="node-label">FOLLOWER</span>
        </div>
        <div className="cluster-center mono">
          {phase === "electing" ? "ELECTING" : "CONSENSUS"}
          <span>{phase === "electing" ? "…" : "2 / 3"}</span>
        </div>
      </div>
      <div className="cluster-console">
        <span className="mono console-prompt">›</span>
        <p aria-live="polite" role="status">
          {status}
        </p>
        <span className="console-cursor" aria-hidden="true" />
      </div>
      <div className="cluster-bottom">
        <button
          onClick={disrupt}
          disabled={phase === "electing"}
          className="chaos-button"
        >
          {phase === "recovered" ? <RotateCcw size={14} /> : <Zap size={14} />}
          {phase === "recovered"
            ? "Restore cluster"
            : phase === "electing"
              ? "Election in progress"
              : "Take leader offline"}
        </button>
        <span className="mono">TRY A LITTLE CHAOS</span>
      </div>
      <p className="demo-disclaimer">
        Interactive illustration ·{" "}
        <a
          href="https://shantanu-1607.github.io/Raftra/"
          target="_blank"
          rel="noreferrer"
        >
          Explore the real Raftra playground <ArrowUpRight size={11} />
        </a>
      </p>
    </div>
  );
}
