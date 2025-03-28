import { Column, Entity, Index } from "typeorm";

@Index("ref_seksi_pkey", ["kdSeksi"], { unique: true })
@Entity("ref_seksi", { schema: "public" })
export class RefSeksi {
  @Column("character", { primary: true, name: "kd_seksi", length: 2 })
  kdSeksi!: string;

  @Column("character varying", { name: "nm_seksi", length: 75 })
  nmSeksi!: string;

  @Column("character", { name: "no_srt_seksi", length: 2 })
  noSrtSeksi!: string;

  @Column("character varying", { name: "kode_surat_1", length: 5 })
  kodeSurat_1!: string;

  @Column("character varying", { name: "kode_surat_2", length: 5 })
  kodeSurat_2!: string;
}
