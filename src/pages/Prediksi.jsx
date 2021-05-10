//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { useEffect, useState, useCallback } from 'react';
import imgPrediksi from '../assets/prediksihitam.svg';
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
//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style

//  Region Import Constants

function Prediksi() {

//  react Hooks (useEffect, etc)

//  Function declaration (handle, onchange, etc)
const data = [
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
	<p style={{ fontSize: '2vw', fontWeight: 'bold', wordWrap:'break-word' }}>
	<img src={imgPrediksi} style={{maxWidth: '100%', maxHeight: '100%'}}/>
	Prediksi
	</p>
	<Row gutter={[10, 20]}>
	<Col xs={24} sm={24} md={24} lg={8}>
	<Row style={{ marginBottom: 10 }}>
	<Card bordered={false} style={{ minWidth: '100%' }}>
	<Typography.Title level={5}>Hallo, Saya PESILINTAR, Berdasarkan prediksi menggunakan <span style={{fontStyle: 'italic'}}> ML Regression Linear</span></Typography.Title>
	<Typography.Title level={5}>{`Besar kWh Listrik 30 Hari yang akan datang ialah :... ${'kWh'}` }</Typography.Title>
	<Typography.Title level={5}>{`Atau Setara dengan : Rp. ..${' ,-'}` }</Typography.Title>
	</Card>
	</Row>
	</Col>
	<Col lg={16} xs={{ order: 1, span: 24 }} sm={{ order: 1, span: 24  }} md={{ order: 2 }}>
	<Card  bordered={false} style={{ minWidth: '100%' }}>
	<Typography.Title level={5}>GRAFIK PREDIKSI <span style={{fontStyle: 'italic'}}> ML Regression Linear</span></Typography.Title>
	<LineChart
	width={500}
	height={300}
	data={data}
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

export default Prediksi

