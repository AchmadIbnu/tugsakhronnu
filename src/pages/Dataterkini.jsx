//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { useEffect, useState, useCallback, PureComponent } from 'react';
import { Col, Row, Typography, Card } from 'antd';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Label
} from "recharts";
import imgTerkini from '../assets/dataterkinihitam.svg';
import { realtime } from '../firebase'
//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style

//  Region Import Constants

function Dataterkini() {

//  react Hooks (useEffect, etc)
// const classes = useStyles();
const [data, setData]=useState([])
  // const [isOn, setValue] = useState(false)

  useEffect(() => {
  	realtime.ref('DataTerkini').on('value', snapshot => {
  		setData(snapshot.val())
  		console.log(snapshot.val())
      // getKoneksi()
  })

  }, [])
//  Function declaration (handle, onchange, etc)
const datagrafik = [
{
	name: "23/05/2021",
	kWh: 1200,
	prediksi: 2200,
	
},
{
	name: "24/05/2021",
	kWh: 1800,
	prediksi: 1000,
},
{
	name: "25/05/2021",
	kWh: 3400,
	prediksi: 2900,
},
{
	name: "26/05/2021",
	kWh: 3000,
	prediksi: 2100,
},
{
	name: "27/05/2021",
	kWh: 3000,
	prediksi: 2400,
},
];
return (
	<>
	<p style={{ fontSize: '2vw', wordWrap:'break-word', fontWeight: 'bold' }}>
	<img src={imgTerkini} style={{maxWidth: '100%', maxHeight: '100%'}}/>
	Pemantauan Energi
	<span style={{fontStyle: 'italic'}}> Realtime</span>
	</p>
	<Row gutter={[10, 20]}>
	<Col xs={24} sm={24} md={24} lg={8}>
	<Row style={{ marginBottom: 10 }}>
	<Card bordered={false} style={{ minWidth: '100%' }}>
	<Typography.Title level={5}>{`Sisa kWh : ${'kWh'}` }</Typography.Title>
	<Typography.Title level={5}>Energi Terpakai : {parseFloat(data.kwh).toFixed(2)} kWh</Typography.Title>
	<Typography.Title level={5}>Konversi Rupiah : Rp. {parseFloat(data.rp).toLocaleString()} ,- </Typography.Title>
	</Card>
	</Row>
	<Row >
	<Card  bordered={false} style={{ minWidth: '100%' }}>
	<Typography.Title level={5}>Tegangan        : {parseFloat(data.v).toFixed(2)} VAC</Typography.Title>
	<Typography.Title level={5}>Arus            : {parseFloat(data.i).toFixed(2)} A</Typography.Title>
	<Typography.Title level={5}>Daya            : {parseFloat(data.p).toFixed(2)} Watt</Typography.Title>
	<Typography.Title level={5}>Power Faktor    : {data.pf}</Typography.Title>
	<Typography.Title level={5}>Frekuensi       : {parseFloat(data.fq).toFixed(2)} Hz</Typography.Title>
	</Card>
	</Row>
	</Col>
	<Col lg={16} xs={{ order: 1, span: 24 }} sm={{ order: 1, span: 24  }} md={{ order: 2 }}>
	<Card  bordered={false} style={{ minWidth: '100%' }}>
	<Typography.Title level={5}>GRAFIK PENGGUNAAN LISTRIK</Typography.Title>
	<LineChart
	width={500}
	height={300}
	data={datagrafik}
	margin={{
		top: 5,
		right: 30,
		left: 5,
		bottom: 5
	}}
	>
	<CartesianGrid strokeDasharray="3 3" />
	<XAxis dataKey="name"  dy={1}>
	<Label value='Hari, Tanggal' offset={2} position='bottom'  dy={5}/>
	</XAxis>
	<YAxis label={{ 
		value: "Energi Listrik (kWh)", 
		position: "insideLeft", 
		angle: -90,   
		dy: 30}} />
		<Tooltip />
		<Legend />
		<Line
		type="monotone"
		dataKey="kWh"
		stroke="#8884d8"
		activeDot={{ r: 8 }}
		/>
		<Line
		type="monotone"
		dataKey="prediksi"
		stroke="#82ca9d"
		activeDot={{ r: 8 }}
		/>
		</LineChart>
		</Card>
		</Col>
		</Row>
		</>
		);
}

export default Dataterkini