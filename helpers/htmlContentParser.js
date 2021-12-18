import ReactHtmlParser from 'react-html-parser'; 

export const htmlContentParser = (content) => {
    const htmlContent = ReactHtmlParser(content);
    const parsedStrings = []; 

    for (let i = 0; i < 3; i++) {
        let _key = htmlContent[i]['props']['children'];
        if (_key.length > 1) {
            _key.forEach(_str => {
                parsedStrings.push(_str['props']['children'][0]);
            });
        }
        else {
            parsedStrings.push(htmlContent[i]['props']['children'][0]['props']['children'][0]);
        }
    }

    return parsedStrings.join(' ');
}
