import { Column, Entity, Index } from "typeorm";

@Index("akta_lahir_pkey", ["noAktaLahir"], { unique: true })
@Index("penduduk_lahir_fk", ["noPenduduk"], {})
@Entity("akta_lahir", { schema: "public" })
export class AktaLahir {
  @Column("character", { primary: true, name: "no_akta_lahir", length: 30 })
  noAktaLahir!: string;

  @Column("character", { name: "no_penduduk", nullable: true, length: 30 })
  noPenduduk!: string | null;
}
