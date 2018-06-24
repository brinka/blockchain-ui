import React from 'react';
import {getItemById} from '../services/searchService';
import Table from './Table';

class Index extends React.Component {
  state = {}

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    const searchString = this.input.current.value;
    this.setState({
      data: getItemById(searchString)
    })
    event.preventDefault();
  }

  render() {

    const table = this.state.data != null
      ? (<Table {...this.state.data} />)
      : (<p style={{textAlign: 'center'}}>Input SKU to see item history</p>)

    return (
      <div style={{width: '100%'}}>
        <form style={{width: '60%', marginLeft: 'auto', marginRight: 'auto'}}  onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" ref={this.input} style={{fontSize: '1.3em'}} className="form-control" placeholder="Item SKU"/>
            <div className="input-group-append">
              <input type="submit" className="btn btn-primary" style={{fontSize: '1.3em'}} value="Search"/>
            </div>
          </div>
        </form>

        <div style={{marginTop: 40}}>
          {table}
        </div>
        
      </div>
      
    )
  }
}

export default Index;