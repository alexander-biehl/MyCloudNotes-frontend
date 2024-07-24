import { ApiContract, request } from '../../axios'

class HealthCheckService {
  private readonly api: ApiContract

  constructor(request: ApiContract) {
    this.api = request
  }

  async healthCheck(): Promise<string> {
    return await this.api.healthCheck()
  }
}

const healthCheckService = new HealthCheckService(request)
export default healthCheckService
