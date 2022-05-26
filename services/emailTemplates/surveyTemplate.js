module.exports = (survey) => {
    // return '<div>' + survey.body + '</div>';
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>${survey.title}</h3>
                    <p>${survey.body}</p>
                    <div>
                        <a href="http://localhost:3001/api/surveys/thanks">Yes</a>
                    </div>
                <div>
            </body>
        </html>
    `;
}

