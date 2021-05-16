//  Region Import External Lib (e.g React, Reactstrap, etc)
import React, { useEffect, useState, useCallback } from 'react';
import { Col, Row, Typography, Card, Table, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import imgHistori from '../assets/historihitam.svg';
//  Region Import Utility/Helper Function

//  Region Import Components

//  Region Import Assets

//  Region Import Style

//  Region Import Constants
const columns = [
{
	title: <span style={{fontStyle: 'bold'}}> 'No'</span>,
	dataIndex: 'no',
	width: 65,
	sorter: {
		compare: (a, b) => a.no - b.no,
		multiple: 3,
	},
},
{
	title: 'Tanggal',
	dataIndex: 'tanggal',
	width: 110,
	sorter: {
		compare: (a, b) => a.tanggal - b.tanggal,
		multiple: 3,
	},
},
{
	title: 'Jam',
	dataIndex: 'jam',
	width: 70,
	sorter: {
		compare: (a, b) => a.jam - b.jam,
		multiple: 2,
	},
},
{
	title: 'Jenis Alarm',
	dataIndex: 'jenisalarm',
	width: 150,
},
];

const dataalarm = [
{
	no: '1',
	tanggal : '09/05/2021',
	jam : '09.00',
	jenisalarm :'Alarm Overload'
},
{
	no: '2',
	tanggal : '11/05/2021',
	jam : '23.00',
	jenisalarm :'Listrik Low'
},
{
	no: '3',
	tanggal : '10/05/2021',
	jam : '11.00',
	jenisalarm :'Prediksi'
},
{
	no: '4',
	tanggal : '12/05/2021',
	jam : '08.00',
	jenisalarm :'Alarm Overload'
},
{
	no: '5',
	tanggal : '12/05/2021',
	jam : '08.00',
	jenisalarm :'Alarm Overload'
},
{
	no: '6',
	tanggal : '12/05/2021',
	jam : '08.00',
	jenisalarm :'Alarm Overload'
},
{
	no: '7',
	tanggal : '12/05/2021',
	jam : '08.00',
	jenisalarm :'Alarm Overload'
},
{
	no: '8',
	tanggal : '12/05/2021',
	jam : '08.00',
	jenisalarm :'Alarm Overload'
},
{
	no: '9',
	tanggal : '12/05/2021',
	jam : '08.00',
	jenisalarm :'Alarm Overload'
},
{
	no: '10',
	tanggal : '12/05/2021',
	jam : '08.00',
	jenisalarm :'Alarm Overload'
},
{
	no: '11',
	tanggal : '12/05/2021',
	jam : '08.00',
	jenisalarm :'Alarm Overload'
},
{
	no: '12',
	tanggal : '12/05/2021',
	jam : '08.00',
	jenisalarm :'Alarm Overload'
},
];

const columns2 = [
{
	title: 'No',
	dataIndex: 'no',
	width: 65,
	sorter: {
		compare: (a, b) => a.no - b.no,
		multiple: 3,
	},
},
{
	title: 'Tanggal',
	dataIndex: 'tanggal',
	width: 110,
	sorter: {
		compare: (a, b) => a.tanggal - b.tanggal,
		multiple: 3,
	},
},
{
	title: 'kWh',
	dataIndex: 'kWh',
	width: 70,
	sorter: {
		compare: (a, b) => a.jam - b.jam,
		multiple: 2,
	},
},
{
	title: 'Rupiah',
	dataIndex: 'rupiah',
	width: 150,
},
];

const datalistrik = [
{
	no: '1',
	tanggal : '09/05/2021',
	kWh : '11',
	rupiah : '11000'
},
{
	no: '2',
	tanggal : '11/05/2021',
	kWh : '11,3',
	rupiah : '11300'
},
{
	no: '3',
	tanggal : '10/05/2021',
	kWh : '12',
	rupiah : '12000'
},
{
	no: '4',
	tanggal : '12/05/2021',
	kWh : '9',
	rupiah :'9000'
},
{
	no: '5',
	tanggal : '12/05/2021',
	kWh : '9',
	rupiah :'9000'
},
{
	no: '6',
	tanggal : '12/05/2021',
	kWh : '12,5',
	rupiah : '12500'
},
{
	no: '7',
	tanggal : '12/05/2021',
	kWh : '12,5',
	rupiah : '12500'
},
{
	no: '8',
	tanggal : '12/05/2021',
	kWh : '12',
	rupiah : '12000'
},
{
	no: '9',
	tanggal : '12/05/2021',
	kWh : '12,5',
	rupiah : '12500'
},
{
	no: '10',
	tanggal : '12/05/2021',
	kWh : '12',
	rupiah : '12000'
},
{
	no: '11',
	tanggal : '12/05/2021',
	kWh : '13,5',
	rupiah : '13500'
},
{
	no: '12',
	tanggal : '12/05/2021',
	kWh : '12,5',
	rupiah : '12500'
},
];

function Histori() {

//  react Hooks (useEffect, etc)



//  Function declaration (handle, onchange, etc)
const dateFormat = 'DD/MM/YYYY';
const timeFormat = 'HH.mm.ss';
return (
	<>
	<p style={{ fontStyle: 'italic', fontSize: '2vw', fontWeight: 'bold', wordWrap:'break-word' }}>
	<img src={imgHistori} style={{maxWidth: '100%', maxHeight: '100%'}}/>
	History & Alarm
	<DatePicker defaultValue={moment()} format={dateFormat}disabled style={{marginLeft: 340}}/>
	<TimePicker defaultValue={moment()} format={timeFormat}disabled />
	</p>
	<Row gutter={[20, 20]}>
	<Col xs={24} sm={24} md={5} lg={12}>
	<Row style={{ marginBottom: 10 }}>
	<Card bordered={true} style={{ minWidth: '100%' }}>
	<p style={{fontWeight: 'bold',fontStyle: 'italic',fontSize: 20,}}>
	Alarm
	</p>
	<DatePicker picker='month'/>
	<Table columns={columns} dataSource={dataalarm} scroll={{ x: 10, y: 200 }} />,
	</Card>
	</Row>
	</Col>
	<Col lg={12} xs={{ order: 1, span: 24 }} sm={{ order: 1, span: 24  }} md={{ order: 5 }}>
	<Card  bordered={false} style={{ minWidth: '100%' }}>
	<p style={{fontWeight: 'bold',fontSize: 20,}}>
	Riwayat Penggunaan Listrik
	</p>
	<DatePicker picker='month'/>
	<Table columns={columns2} dataSource={datalistrik} scroll={{ x: 10, y: 200 }} />,
	</Card>
	</Col>
	</Row>
	</>
	);
}

export default Histori