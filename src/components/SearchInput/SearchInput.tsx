import React, {Component} from 'react'
interface ISearchInputProps {
    search: string,
    onSearch: (value:string) => void
}
export default class SearchInput extends Component<ISearchInputProps> {
    state = {
        search: ''
    }

    render() {
        return (
            <div>
                <p>Search</p>
                <input type="text" value={this.props.search} onChange={(e) => this.props.onSearch(e.target.value)}/>
            </div>
        )
    }
}