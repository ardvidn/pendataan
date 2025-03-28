import { Column, Entity, Index } from "typeorm";

@Index("jabatan_komdir_pkey", ["kdJabatanKomdir"], { unique: true })
@Entity("jabatan_komdir", { schema: "public" })
export class JabatanKomdir {
  @Column("character", { primary: true, name: "kd_jabatan_komdir", length: 2 })
  kdJabatanKomdir!: string;

  @Column("character varying", {
    name: "ket_jabatan",
    nullable: true,
    length: 30,
  })
  ketJabatan!: string | null;
}
