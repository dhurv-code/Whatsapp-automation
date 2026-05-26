import axios from 'axios'

export function sendWebhookMessage(message) {
  return axios.post('/webhook', {
    phone: '9999999999',
    business_id: 'gym_001',
    message
  })
}
