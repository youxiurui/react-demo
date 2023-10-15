import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'
export default function ReactForm() {
    const [isGet, setGet] = useState(false)
    const [isShow, setShow] = useState(false)
    const [persons, setPerson] = useState([])
    const [p, setP] = useState({
        name: '',
        age: '',
        sex: '',
        work: ''
    })
    const [type, setType] = useState('ADD')
    useEffect(() => {
        axios.get('/api/user-data').then(res => {
            setPerson(res.data)
        })
    }, [isGet])
    function handleAddPerson() {
        let data = { ...p, age: +p.age }
        try {
            switch (type) {
                case 'ADD':
                    {
                        axios.post('/api/user-add', data).then(res => {
                            setGet(!isGet)
                        })
                        break
                    }
                case 'MOD':
                    {
                        axios.post('/api/user-mod', data).then(res => {
                            setGet(!isGet)
                        })
                        setType('ADD')
                        break
                    }
                default:
                    throw new Error()
            }
        } catch (err) {
            console.log(err)
        }
        setShow(false)
    }
    function handleChangeP(id) {
        let per = persons.find(person => id === person.id)
        setP(per)
        setShow(true)
        setType('MOD')
    }
    function handleAdd() {
        setP({
            name: '',
            age: '',
            sex: '',
            work: ''
        })
        setShow(true)
    }
    function handleDel(id){
        axios.get(`/api/user-del?id=${id}`).then(res=>{
            setPerson(res.data)
        })
    }
    return <>
        <div className="react-form">
            <table>
                <thead className='thead'>
                    <tr>
                        <th>
                            姓名
                        </th>
                        <th>
                            年龄
                        </th>
                        <th>
                            性别
                        </th>
                        <th>
                            职业
                        </th>
                        <th>
                            <button className='addbtn' onClick={handleAdd}>
                                添加
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person) =>
                        <tr key={person.id}>
                            <td>
                                {person.name}
                            </td>
                            <td>
                                {person.age}
                            </td>
                            <td>
                                {person.sex}
                            </td>
                            <td>
                                {person.work}
                            </td>
                            <td>
                                <button style={{ width: '30%', marginRight: '5%' }} onClick={() => handleChangeP(person.id)}>修改</button>
                                <button style={{ width: '30%' }} onClick={()=>handleDel(person.id)}>删除</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="mark" style={{ display: isShow ? 'block' : 'none' }}>
                <label>
                    姓名：<input type="text" value={p.name} onChange={e => setP({ ...p, name: e.target.value })} />
                </label>
                <label>
                    年龄：<input type="text" value={p.age} onChange={e => setP({ ...p, age: e.target.value })} />
                </label>
                <label>
                    性别：<input type="text" value={p.sex} onChange={e => setP({ ...p, sex: e.target.value })} />
                </label>
                <label>
                    职业：<input type="text" value={p.work} onChange={e => setP({ ...p, work: e.target.value })} />
                </label>
                <button style={{ position: 'relative', left: '40%', bottom: '-10%' }} onClick={handleAddPerson}>确定</button>
                <button style={{ position: 'relative', left: '50%', bottom: '-10%' }} onClick={() => setShow(false)}>取消</button>
            </div>
        </div>
    </>
}