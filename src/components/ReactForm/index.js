import { useState, useEffect } from 'react'
import ajax from '../../ajax'
import Person from './Person'
import Mark from './Mark'
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
        const getData = async () => {
            let data = await ajax('/api/user-data', 'GET')
            setPerson(data)
        }
        getData()
    }, [isGet])
    async function handleAddPerson() {
        let data = { ...p, age: +p.age }
        try {
            switch (type) {
                case 'ADD':
                    {
                        await ajax('/api/user-add', 'POST', data)
                        setGet(!isGet)
                        break
                    }
                case 'MOD':
                    {
                        await ajax('/api/user-mod', 'POST', data)
                        setGet(!isGet)
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
    async function handleDel(id) {
        let data = await ajax('/api/user-del', 'GET', { id })
        setPerson(data)
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
                        <Person person={person} key={person.id} handleChangeP={handleChangeP} handleDel={handleDel} />
                    )}
                </tbody>
            </table>
            {isShow && <Mark p={p} handleChangeP={(type, data) => setP({ ...p, [type]: data })} handleIsShow={(falg) => setShow(falg)} handleAddPerson={handleAddPerson} />}
        </div>
    </>
}