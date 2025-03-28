import { Column, Entity, Index } from "typeorm";

@Index("kepegawaian_pkey", ["noPegawai"], { unique: true })
@Index("penduduk_pegawai_fk", ["noPenduduk"], {})
@Entity("kepegawaian", { schema: "public" })
export class Kepegawaian {
  @Column("character", { primary: true, name: "no_pegawai", length: 15 })
  noPegawai!: string;

  @Column("character", { name: "no_penduduk", length: 30 })
  noPenduduk!: string;
}
