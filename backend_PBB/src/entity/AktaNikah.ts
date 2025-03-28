import { Column, Entity, Index } from "typeorm";

@Index("akta_nikah_pkey", ["noAkteNikah"], { unique: true })
@Index("penduduk_nikah_fk", ["noPenduduk"], {})
@Entity("akta_nikah", { schema: "public" })
export class AktaNikah {
  @Column("character", { primary: true, name: "no_akte_nikah", length: 30 })
  noAkteNikah!: string;

  @Column("character", { name: "no_penduduk", nullable: true, length: 30 })
  noPenduduk!: string | null;
}
