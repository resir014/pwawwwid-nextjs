import * as React from 'react'
import * as serviceWorker from '../utils/serviceWorker'

// This component intentionally left blank. It's only used to
// mount our service worker during production mode.
class ServiceWorkerWrapper extends React.Component {
  public componentDidMount() {
    serviceWorker.register({
      onSuccess: registration => serviceWorker.log('success', registration),
      onUpdate: registration => serviceWorker.log('update', registration),
    })
  }

  public render() {
    return <div className="service-worker-wrapper" />
  }
}

export default ServiceWorkerWrapper
