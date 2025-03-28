import { Column, Entity, Index } from "typeorm";

@Index("penduduk_asuransi_fk", ["noPenduduk"], {})
@Index("asuransi_pkey", ["noPolis"], { unique: true })
@Entity("asuransi", { schema: "public" })
export class Asuransi {
  @Column("character", { primary: true, name: "no_polis", length: 30 })
  noPolis!: string;

  @Column("character", { name: "no_penduduk", nullable: true, length: 30 })
  noPenduduk!: string | null;

  @Column("character varying", {
    name: "ket_asuransi",
    nullable: true,
    length: 30,
  })
  ketAsuransi!: string | null;
}
