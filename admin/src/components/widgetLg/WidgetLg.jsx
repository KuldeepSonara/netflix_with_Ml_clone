import "./WidgetLg.scss"

export const WidgetLg = () => {
  const Img = "https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=600";

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="WidgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Img} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
          <Button type="Approve" className="widgetLgButton"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Img} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
          <Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Img} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
          <Button type="Pending"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Img} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
          <Button type="Approve"/>
          </td>
        </tr>
      </table>
    </div>
  )
}