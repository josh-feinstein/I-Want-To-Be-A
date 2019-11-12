import React, { Component } from 'react';
import data from '../data/dummy-data.js';
import '../style/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data,
            selected: 'default'
        };

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(e) {
        this.setState({selected: e.target.value})
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h3>I Want To Be A...</h3>
                    <select onChange={this.handleSelect}>
                        <option value="default">- Select a Career -</option>
                        {this.state.data.map(career => (
                            <option value={career.career_title}>{career.career_title}</option>
                        ))}
                    </select>
                    {this.state.selected === 'default' ? null : (
                        <table>
                            <thead>
                                <td>Skill:</td>
                                <td>Learn it Here:</td>
                            </thead>
                        {this.state.data.find(career => career.career_title === this.state.selected).skills
                            .map(skill => (
                                <tr>
                                    <td>{skill.skill_title}:</td>
                                    <td><a href={skill.skill_resource}>Learn More</a></td>
                                </tr>
                            ))}
                            </table>
                        )
                    }
                </header>
            </div>
        );
    }
}

export default App;
