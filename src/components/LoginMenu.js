import React, { Component } from 'react';



class LoginMenu extends Component {
    constructor (props) {
        super(props);
        this.state= {
            username: '',
            password: '',
            remember: false
        } 
    }

    mouseOverHandler = (e) => {
        return e.target.style.backgroundColor = 'var(--mainYellow)';
    }
    mouseLeaveHandler = (e) => {
        return e.target.style.backgroundColor = '#5A6268';
    }
    onChangeHandler = (e) => {
        return this.setState({
            [e.target.name] : e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }

    componentDidMount () {
        document.querySelector("input[type='text']").focus();
    }

    render() {
        return (
            
            <form style= {loginMenu}>
                <h3 className="text-center mb-3">Login</h3>
                <div className="form-group">
                    <input type="text" class="form-control" name="username" placeholder="Username" onChange= {this.onChangeHandler}  />
                </div>
                <div className="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password" onChange= {this.onChangeHandler}  />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" name="remember" onChange= {this.onChangeHandler}  />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" class="btn btn-secondary w-100" onMouseOver={this.mouseOverHandler}  onMouseLeave={this.mouseLeaveHandler}>Login</button>
            </form>
        )
    }
}

const loginMenu = {
    position: 'absolute',
    top: 50,
    right: 150,
    width: '280px',
    height: 'auto',
    border: '1px solid var(--darkGrey)',
    boxShadow: '1px 1px 5px var(--darkGrey)',
    zIndex: 10,
    padding: '15px'
}

export default LoginMenu;