BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Solicitud] ALTER COLUMN [fecha] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Solicitud] ALTER COLUMN [horaInicio] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Solicitud] ALTER COLUMN [horaFin] NVARCHAR(1000) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
