import Analytics from "analytics";
import segmentPlugin from '@analytics/segment'

const analytics = Analytics({
    app: 'test',
    plugins: [
        segmentPlugin({
            writeKey: '<WRITE_KEY>' // << your segment write key
        }),
        SamplePlugin({
            key: 'some random key here'
        })
    ]
})

function SamplePlugin(config) {
    return {
      NAMESPACE: 'debugger',
      initialize: ({ payload }) => {
        console.log('Plugins Initialized', config)
      },
      page: ({ payload }) => {
        console.log("page call sent, plugin generated payload:", payload)
        // fetch('', {
        //   method: 'POST',
        //   headers: {
        //     Authorization: `Bearer ${config.key}`,
        //     'Content-Type': 'application/json'
        // },
        //   body: JSON.stringify(payload)
        // }).then(console.log)
      },
      /* Track event */
      track: ({ payload }) => {
        console.log("track call sent, plugin generated payload:", payload)

        // fetch('', {
        //   method: 'POST',
        //   headers: {
        //     Authorization: `Bearer ${config.key}`,
        //     'Content-Type': 'application/json'
        // },
        //   body: JSON.stringify(payload)
        // }).then(console.log)
      },
      /* Identify user */
      identify: ({ payload }) => {
        console.log("ID call sent, plugin generated payload:", payload)

        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //       Authorization: `Bearer ${config.key}`,
        //       'Content-Type': 'application/json'
        //   },
        //     body: JSON.stringify(payload)
        //   }).then(console.log)
      },
      loaded: () => {
        return true
      },
      ready: () => {
        console.log('analytics ready')
      }
    }
  }

export default analytics