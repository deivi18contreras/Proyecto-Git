/**
 * [HUS-02-T4] Correo de Bienvenida: Simulación de envío de instrucciones iniciales.
 */

export const enviarCorreoBienvenida = async (nombre, correo) => {
    console.log('----------------------------------------------------');
    console.log(`✉️ ENVIANDO CORREO DE BIENVENIDA A: ${correo}`);
    console.log(`Hola ${nombre}, ¡Bienvenido al Sistema de Asistencia del Colegio San José!`);
    console.log('----------------------------------------------------');
    console.log('Instrucciones Iniciales de Uso:');
    console.log('1. Accede con tu correo institucional (@sanjose.edu.co).');
    console.log('2. Tu primera acción debe ser revisar tu horario en el Dashboard.');
    console.log('3. Para registrar asistencia, haz clic en el botón "Toma de Asistencia" de tu clase actual.');
    console.log('4. Si tienes problemas de acceso, contacta a soporte técnico.');
    console.log('----------------------------------------------------');
    console.log('✅ Correo simulado exitosamente.');
    console.log('----------------------------------------------------');

    return true;
};
