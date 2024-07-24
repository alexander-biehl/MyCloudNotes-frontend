import { LoaderFunction } from 'react-router-dom'
import healthCheckService from '../../../network/api/service/HealthCheckService'

const loader: LoaderFunction = async () => {
  const healthCheckResult: string = await healthCheckService.healthCheck()
  return healthCheckResult
}
export default loader
