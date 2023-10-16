import { useState } from 'react'
import './index.css'
export default function Mark({p,handleAddPerson,handleChangeP,handleIsShow}) {

    return <>
        <div className="mark">
            <label>
                姓名：<input type="text" value={p.name} onChange={e => handleChangeP('name',e.target.value)} />
            </label>
            <label>
                年龄：<input type="text" value={p.age} onChange={e => handleChangeP('age',e.target.value)} />
            </label>
            <label>
                性别：<input type="text" value={p.sex} onChange={e => handleChangeP('sex',e.target.value)} />
            </label>
            <label>
                职业：<input type="text" value={p.work} onChange={e => handleChangeP('work',e.target.value)} />
            </label>
            <button style={{ position: 'relative', left: '40%', bottom: '-10%' }} onClick={handleAddPerson}>确定</button>
            <button style={{ position: 'relative', left: '50%', bottom: '-10%' }} onClick={() => handleIsShow(false)}>取消</button>
        </div>
    </>
}