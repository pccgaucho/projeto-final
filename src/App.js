import React from 'react'
import { PrimeReactProvider } from 'primereact/api'
import { Button } from 'primereact/button'

import { Menubar } from 'primereact/menubar'
import logo from './assets/img/logo-tt.png'

const App = () => {

  const menuItems = [
    {
      label: 'Departamentos',
      icon: 'pi pi-users',
      items: [
        {
          label: 'Listar',
          icon: 'pi pi-list',
          command: () => {
            alert('Listar')
          }
        },
        {
          separator: true
        },
        {
          label: 'Adicionar',
          icon: 'pi pi-plus'
        }
      ]
    }
  ]
  const start = <img src={logo} className='w-6 mr-4'/>




  return (
    <PrimeReactProvider>

      <Menubar model={menuItems} start={start}/>

      <div className='container mx-auto'>
        <h1>Bem vindo</h1>
        <Button
          label='Botão 1'
          icon='pi pi-user'
          iconPos='right'
        />
      </div>

    </PrimeReactProvider>
   
  )
}

export default App
