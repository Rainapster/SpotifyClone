export const formatDuration = (durationMs: number) => {
    const minutes = Math.floor(durationMs / 60000); // Converte ms in minuti
    const seconds = Math.floor((durationMs % 60000) / 1000); // Resto in secondi
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};