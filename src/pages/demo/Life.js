import React from 'react'
import Child from './Child'
import 'antd/dist/antd.css'
import './index.less'
import { Button } from 'antd'
export default class Life extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAdd = () => {
    console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  }

  // 声明式
  handleClick () {
    console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className='content'>
        <p>React生命周期介绍</p>
        <Button onClick={this.handleAdd}>Antd Click me</Button>
        <button onClick={this.handleAdd}>Click me</button>
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        <p>{this.state.count}</p>
        <Child name={this.state.count} />
      </div>
    )
  }
}