import { Column, Entity, Index } from "typeorm";

@Index("paspor_pkey", ["noPaspor"], { unique: true })
@Index("penduduk_paspor_fk", ["noPenduduk"], {})
@Entity("paspor", { schema: "public" })
export class Paspor {
  @Column("character", { primary: true, name: "no_paspor", length: 30 })
  noPaspor!: string;

  @Column("character", { name: "no_penduduk", nullable: true, length: 30 })
  noPenduduk!: string | null;
}
