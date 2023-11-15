import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const StarBackground = (props) => {

    const ref = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );

    console.log(sphere.some(isNaN));


    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} {...props}>

                <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation={true} depthWrite={false} />

            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className='w-full h-auto fixed inset-0 z-20'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarBackground />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default StarsCanvas;