import './FigureUser.css';

const FigureUser = (user) => {
  return (
    <figure className="dataProfile">
      <img src={user.user.image} alt="user pic" className="imageUser" />
      <h4 className="emailUser">{user.user.email}</h4>
    </figure>
  );
};

export default FigureUser;
