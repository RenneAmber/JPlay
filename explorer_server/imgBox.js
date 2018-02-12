var React = require('react');

var Img = React.createClass({
    render: function() {
        return (
            <div className="img">
                <h2 className="imgName">
                    {this.props.name}
                </h2>
                <span dangerouslySetInnerHTML="Test" />
            </div>
        );
    }
});

var ImgList = React.createClass({
    render: function() {
        var imgNodes = this.props.data.map(function (img) {
            return (
                <Img name={img.name}>
                    <image src={img.url} />
                </Img>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var ImgBox=React.createClass({
    loadImgsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (data) {
                this.setState({data: data})
            }.bind(this),
            error:function(xhr,status,err){
                console.error(this.props.url,status,err.toString());
            }.bind(this)
        });
    },
    handleSubmit:function(img){
        var imgs = this.state.data;
        var newImgs = imgs.concat([img]);
        this.setState({data:newImgs});
        $.ajax({
            url:this.props.url,
            dataType:'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadImgsFromServer();
        setInterval(this.loadImgsFromServer, this.props.pollInterval);
    },
    render: function() {
        return (
            <div className="imgBox">
                <h1>我的图片</h1>
                <CommentList data={this.state.data} />
                <CommentForm onImgSubmit={this.handleSubmit} />
            </div>
        );
    }
});

module.exports = ImgBox;