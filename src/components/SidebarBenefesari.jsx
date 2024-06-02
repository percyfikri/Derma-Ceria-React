import React from "react"

const SidebarBenefesari = () => {
  return (
    <div>
     
      <div className="container shadow bg-color-hitam p-4 text-white w-64">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3cec74c131f5abe3496dd27abb649dbe7a71b8a637a2853c45c707ba7b4e20b?"
          className="img-fluid d-block mx-auto my-4"
          alt="Main"
        />
        <div className="d-flex my-5 text-warning">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6d8ebd928f0db0d9d345260d0622a4eabb88611d058a60ed265a0caade09ad3?"
            className="me-3"
            style={{ width: '25px', height: '25px' }}
            alt="Dashboard Icon"
          />
          <div>Dashboard</div>
        </div>
        <div className="d-flex my-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7552c5ee9d6a17ab609b84fe851e098c9a94c3372c5df94f2e9548e44dc1588a?"
            className="me-3"
            style={{ width: '26px', height: '26px' }}
            alt="Program Kampanye Icon"
          />
          <div>Program Kampanye</div>
        </div>
        <div className="d-flex my-3 justify-content-between">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e686ba26fbb5d06affd0c0871a853ce84ef84ac7c781b93bf685cd3fc97c5103?"
            className="me-3"
            style={{ width: '30px', height: '30px' }}
            alt="Pelacakan Donasi Icon"
          />
          <div>Pelacakan Donasi</div>
        </div>
        <div className="d-flex my-3 justify-content-between text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b5ac7a2cb6e95a0875764d32dff61f1ff62760d96b3e207212d790166529136?"
            className="me-3"
            style={{ width: '30px', height: '30px' }}
            alt="Transparansi Donasi Icon"
          />
          <div>Transparansi Donasi</div>
        </div>
        <div className="d-flex my-5 justify-content-between text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/00fe12cb17aef9bf952c8b2fb458c1c8d205905a4492eeb3e7c523663f2a1e2a?"
            className="me-3"
            style={{
              width: '24px',
              height: '24px',
              border: '3px solid #fff',
            }}
            alt="Keluar Icon"
          />
          <div>Keluar</div>
        </div>
      </div>
    </div>
  )
}

export default SidebarBenefesari