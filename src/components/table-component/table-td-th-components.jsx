import "./table-modules.css";

const ThComponent = ({ list, list2, name,img }) => {
  return (
    <tr className="rajesh">
      <th className="th">{name}</th>
      <th className="th">{list}</th>
      <th className="th">{list2}</th>
      <th className="td">{img}</th>
    </tr>
  );
};

export default ThComponent;

export const TdComponent = ({ list5, list6, name1,src }) => {
  return (
    <tr className="rajesh">
      <td className="th">{name1}</td>
      <td className="th">{list5}</td>
      <td className="th">{list6}</td>
      <td className="td" ><img className="image" src={src} alt="" /></td>
    </tr>
  );
};
