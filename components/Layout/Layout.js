import NavBar from '../NavBar';

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid red'
// };

export default props => {
  return (
    <div class='mt-32'>
      <NavBar />
      {props.children}
    </div>
  );
};
