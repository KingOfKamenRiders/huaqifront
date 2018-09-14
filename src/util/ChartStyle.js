var TooltipStyle = {
    visibility: 'hidden',
    border : '1px solid #efefef',
    backgroundColor: 'black',
    color: 'white',
    opacity: "0.8",
    padding: '5px 15px',
    'transition': 'top 200ms,left 200ms'
}

var axisStyle={
    formatter(text, item, index) {
        let arr = text.split(' ');
        return `${arr[0]}\n${arr[1]}`;
    },
}
export {TooltipStyle,axisStyle}