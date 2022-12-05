// using something like tRPC with a graphql backend would
// allow us to infer these types from the server and synchronize
// them across frontend client and server "automatically"

export interface Metrics {
  latency: number,
  uptime: number,
  requests: number,
  errors: number,
}

export interface Developer {
  id: string,
  name: string,
  email: string,
  avatar: string,
}

export interface Version {
  id: string,
  name: string,
  description: string,
  developer: Developer,
  updated_at: Date,
}

export interface Service extends Record<string, any> {
  id: string,
  name: string,
  description: string,
  published: boolean,
  metrics: Metrics,
  versions: Version[],
}
