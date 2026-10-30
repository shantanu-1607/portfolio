export const profile = {
  name: "Shantanu Kumar Singh",
  shortName: "Shantanu Singh",
  role: "Backend & distributed systems engineer",
  url: "https://portfolio-shady17.vercel.app",
  email: "shantanu.singh16076@gmail.com",
  github: "https://github.com/shantanu-1607",
  linkedin: "https://www.linkedin.com/in/shantanu-singh-b46984240/",
  leetcode: "https://leetcode.com/u/shantanu_singh28/",
  codeforces: "https://codeforces.com/profile/shandy_16",
  location: "Ranchi, India",
  description:
    "Shantanu Singh builds reliable backend systems with Go, distributed systems, and a curiosity for what happens when things break. Explore projects, open-source contributions, and experience.",
};

// Project details and benchmark conditions are documented in the linked repositories.
// Keep benchmarks contextual: these are local experiments, not production SLAs.
export const projects = [
  {
    number: "01",
    slug: "raftra",
    title: "Raftra",
    category: "Distributed systems",
    tagline: "One node fails. The system carries on.",
    description:
      "A replicated key-value store with a Raft consensus engine written from scratch. Leader elections, durable logs, and recovery—built to understand the hard parts, not abstract them away.",
    technologies: ["Go", "Raft", "gRPC", "bbolt", "Prometheus"],
    source: "https://github.com/shantanu-1607/Raftra",
    demo: "https://shantanu-1607.github.io/Raftra/",
    detail:
      "Every write is replicated to a majority before it commits. Persistent term, vote, and log state support crash recovery; a chaos harness exercises leader loss, network partitions, and full-cluster blackouts. HTTP reads use local state and are not linearizable.",
    result: "8 chaos scenarios · 3-node cluster",
  },
  {
    number: "02",
    slug: "rate-limiter",
    title: "Distributed Rate Limiter",
    category: "Performance engineering",
    tagline: "Many replicas. One consistent quota.",
    description:
      "Per-tenant API protection across stateless Go replicas. Atomic Redis Lua scripts close race windows; hot-key sharding and bounded concurrency keep the system steady under load.",
    technologies: ["Go", "Redis", "Lua", "nginx", "k6"],
    source: "https://github.com/shantanu-1607/rate-limiter",
    demo: null,
    detail:
      "Token-bucket and sliding-window implementations share state in Redis. Deliberately broken baselines expose split-counter and check-then-set failures. The local k6 benchmark reports ~33.6K requests/sec with 10 shards, 100 virtual users, three Go replicas, and one Redis instance; this is a test result, not a production guarantee.",
    result: "Atomic decisions · Load-tested with k6",
  },
  {
    number: "03",
    slug: "niyantran",
    title: "Niyantran",
    category: "Full-stack & applied ML",
    tagline: "A clearer picture of a city in motion.",
    description:
      "An AI-powered traffic command center for Bengaluru. A 10-stage planning pipeline connects congestion forecasts, a 294-junction road graph, and live WebSocket heatmaps.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "BullMQ"],
    source: "https://github.com/shantanu-1607/Niyantran",
    demo: null,
    detail:
      "The planning pipeline models event impact and propagates congestion over the road graph using BFS. ML forecasts and uncertainty estimates inform dispatch, while Redis and BullMQ coordinate background work. Built for Flipkart Gridlock 2.0.",
    result: "294 junctions · Event-driven planning",
  },
] as const;

export const contributions = [
  {
    project: "Jaeger",
    area: "Distributed tracing",
    title: "Making MCP endpoint exposure and security setup clearer.",
    type: "Documentation",
    pr: "#9828",
    href: "https://github.com/jaegertracing/jaeger/pull/9828",
  },
  {
    project: "OpenSRE",
    area: "AI for infrastructure",
    title: "Replacing approval allowlist scans with constant-time set lookups.",
    type: "Performance",
    pr: "#4700",
    href: "https://github.com/Tracer-Cloud/opensre/pull/4700",
  },
  {
    project: "OpenSRE",
    area: "AI for infrastructure",
    title: "Bringing stronger types to the data-masking pipeline with StrEnum.",
    type: "Type safety",
    pr: "#4781",
    href: "https://github.com/Tracer-Cloud/opensre/pull/4781",
  },
] as const;

export const toolkit = [
  { label: "Languages", tools: "Go / C++ / Python / TypeScript / SQL" },
  {
    label: "Services & data",
    tools: "gRPC / PostgreSQL / Redis / bbolt / FastAPI",
  },
  { label: "Cloud & delivery", tools: "AWS / Docker / GitHub Actions / nginx" },
  { label: "Visibility & testing", tools: "Prometheus / k6 / Chaos testing" },
] as const;
