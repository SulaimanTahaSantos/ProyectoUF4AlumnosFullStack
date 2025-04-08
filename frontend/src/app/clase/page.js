"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { estudiantes } from "@/clases/clase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Clase() {
    const router = useRouter();
    const [estudiantesList, setEstudiantesList] = useState(estudiantes);
    const [showModal, setShowModal] = useState(false);
    const [newEstudiante, setNewEstudiante] = useState({
        nombre: '',
        apellidos: '',
        grupo: '',
        clase: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEstudiante({
            ...newEstudiante,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEstudiantesList((prevEstudiantes) => [
            ...prevEstudiantes,
            newEstudiante,
        ]);
        setShowModal(false);
        setNewEstudiante({
            nombre: '',
            apellidos: '',
            grupo: '',
            clase: ''
        });
        console.log("Nuevo estudiante agregado:", newEstudiante);
        console.log("Lista de estudiantes actualizada:", estudiantesList);
    };

    // Función para volver a la página principal
    const handleClick = () => {
        console.log("Volver a Home");
        router.push("/home");
    };

    const handleAddUser = () => {
        console.log("Añadir usuario a la clase");
        setShowModal(true);
    };

    return (
        <main className="container mx-auto py-10">
            <Button onClick={handleClick} variant="outline" className="mb-4">
                Volver a Home
            </Button>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogTrigger asChild>
                    <Button onClick={handleAddUser} variant="primary">
                        Añadir Usuario
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Añadir Usuario</DialogTitle>
                    <DialogDescription>
                        Aquí puedes añadir un nuevo usuario a la clase.
                    </DialogDescription>
                    <Form className="space-y-4" onSubmit={handleSubmit}>
                        <Label>Nombre:</Label>
                        <Input
                            type="text"
                            name="nombre"
                            value={newEstudiante.nombre}
                            onChange={handleInputChange}
                            placeholder="Nombre"
                            className="input"
                        />
                        <Label>Apellidos:</Label>
                        <Input
                            type="text"
                            name="apellidos"
                            value={newEstudiante.apellidos}
                            onChange={handleInputChange}
                            placeholder="Apellidos"
                            className="input"
                        />
                        <Label>Grupo:</Label>
                        <Input
                            type="text"
                            name="grupo"
                            value={newEstudiante.grupo}
                            onChange={handleInputChange}
                            placeholder="Grupo"
                            className="input"
                        />
                        <Label>Clase:</Label>
                        <Input
                            type="text"
                            name="clase"
                            value={newEstudiante.clase}
                            onChange={handleInputChange}
                            placeholder="Clase"
                            className="input"
                        />
                        <Button type="submit">Guardar</Button>
                    </Form>
                </DialogContent>
                <DialogFooter>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                </DialogFooter>
            </Dialog>

            <h1 className="text-2xl font-bold mb-6">Usuarios y Grupos</h1>
            <p className="text-gray-700 mb-4">
                Aquí puedes gestionar los usuarios y grupos de tu sistema.
            </p>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Apellidos</TableHead>
                            <TableHead>Grupo</TableHead>
                            <TableHead>Clase</TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {estudiantesList.map((estudiante, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell>{estudiante.nombre}</TableCell>
                                <TableCell>{estudiante.apellidos}</TableCell>
                                <TableCell>{estudiante.grupo}</TableCell>
                                <TableCell>{estudiante.clase}</TableCell>
                                <TableCell className="text-right">
                                    Editar | Eliminar
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </main>
    );
}
