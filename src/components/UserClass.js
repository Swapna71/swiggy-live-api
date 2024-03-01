import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "",
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Swapna71");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  // componentDidUpdate() {
  //   console.log("i am updated");
  // }

  // componentWillUnmount() {
  //   console.log("unmounting");
  // }
  render() {
    return (
      <div className="border-2 border-solid border-lime-300 m-3 p-3 w-[230px] bg-lime-100 font-semibold">
        <img className="w-20" src={this.state.userInfo.avatar_url} alt="img" />
        <div className="UserName">Name-{this.state.userInfo.name}</div>
        <div className="userLocation">
          Location-{this.state.userInfo.location}
        </div>
        <div className="userContact">
          Followers-{this.state.userInfo.followers}
        </div>
      </div>
    );
  }
}

export default UserClass;
