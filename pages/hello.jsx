import React from 'react'
import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(() => import('../components/Hello2.jsx'), {
  loading: () => <p>...</p>
})


export default class extends React.Component {
  static async getInitialProps(ctx) {
    const { req } = ctx
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        Hello UserAgent {this.props.userAgent}
        <DynamicComponentWithCustomLoading />
      </div>
    )
  }
}
