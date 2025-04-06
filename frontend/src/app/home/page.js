export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-900 text-center">
                        Sistema de Gestión Académica
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 text-center">
                        Gestiona tus clases, módulos, entregas y más
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Clases Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Clases</h2>
                        <p className="text-gray-600">Gestiona tus clases y horarios</p>
                    </div>

                    {/* Módulos Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Módulos</h2>
                        <p className="text-gray-600">Accede a los contenidos de los módulos</p>
                    </div>

                    {/* Entregas Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Entregas</h2>
                        <p className="text-gray-600">Gestiona tus entregas de proyectos</p>
                    </div>

                    {/* Grupos Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Grupos</h2>
                        <p className="text-gray-600">Visualiza y gestiona tus grupos</p>
                    </div>

                    {/* Notas Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notas</h2>
                        <p className="text-gray-600">Consulta tus calificaciones</p>
                    </div>

                    {/* Rúbricas Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rúbricas</h2>
                        <p className="text-gray-600">Revisa los criterios de evaluación</p>
                    </div>
                </div>

                {/* Enunciados Section */}
                <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enunciados</h2>
                    <p className="text-gray-600">Accede a los enunciados de tus proyectos y actividades</p>
                </div>
            </div>
        </main>
    );
}