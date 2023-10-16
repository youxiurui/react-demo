export default function Person({person,handleChangeP,handleDel}) {
    return <>
        <tr>
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
                <button style={{ width: '30%' }} onClick={() => handleDel(person.id)}>删除</button>
            </td>
        </tr>
    </>
}