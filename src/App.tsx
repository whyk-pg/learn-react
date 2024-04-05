const Button = () => {
  return <button type="button">I'm a button</button>;
};

export const App = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button />
    </div>
  );
};

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://avatars.githubusercontent.com/u/16016681",
  imageSize: 90,
};

export const Profile = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`Face of ${user.name}`}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
};
