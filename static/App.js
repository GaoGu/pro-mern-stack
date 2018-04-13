const contentNode = document.getElementById('contents');
const issues = [{
    id: 1, status: 'Open', owner: 'Ravan',
    created: new Date('2016-08-15'), effort: 5,
    completionDate: undefined,
    title: 'Rrror in console when clicking Add'
}, {
    id: 2, status: 'Assigned', owner: 'Eddie',
    created: new Date('2016-08-16'), effort: 14,
    completionDate: new Date('2016-08-30'),
    title: 'Missing bottom border on panel'
}];

class IssueFilter extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a placeholder for the issue IssueFilter.'
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        return React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                null,
                issue.id
            ),
            React.createElement(
                'td',
                null,
                issue.status
            ),
            React.createElement(
                'td',
                null,
                issue.owner
            ),
            React.createElement(
                'td',
                null,
                issue.created.toDateString()
            ),
            React.createElement(
                'td',
                null,
                issue.effort
            ),
            React.createElement(
                'td',
                null,
                issue.completionDate ? issue.completionDate.toDateString() : ''
            ),
            React.createElement(
                'td',
                null,
                issue.title
            )
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => React.createElement(IssueRow, { issue: issue }));
        return React.createElement(
            'table',
            { className: 'bordered-table' },
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        null,
                        'Id'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'status'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'owner'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'created'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'effort'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'completionDate'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'title'
                    )
                )
            ),
            React.createElement(
                'tbody',
                null,
                issueRows
            )
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a placeholder for an Issues Add entry form.'
        );
    }
}
class IssueList extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Issue Tracker'
            ),
            React.createElement(IssueFilter, null),
            React.createElement('hr', null),
            React.createElement(IssueTable, { issues: issues }),
            React.createElement('hr', null),
            React.createElement(IssueAdd, null)
        );
    }
}
ReactDOM.render(React.createElement(IssueList, null), contentNode);