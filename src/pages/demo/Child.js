import React from 'react'

export default class Child extends React.Component{
  // constructor(props) {
  //   console.log(props)
  //   super(props)
  //   this.state = {
  //     count: 0
  //   }
  // }
  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount', this)
  }
  
  componentWillReceiveProps() {
    console.log('will receive props === ', this.props)
    
  }

  shouldComponentUpdate() {
    console.log('update ? ')
    return true
  }

  componentWillUpdate() {
    console.log('will update')
  }

  componentDidUpdate() {
    console.log('did update')
  }

  render() {
    console.log('render', this)
    return (
      <div>
        <p> hello world {this.props.name}</p>
      </div>
    )
  }
}