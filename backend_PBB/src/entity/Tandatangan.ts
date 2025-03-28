import { Column, Entity, Index } from "typeorm";

@Index("tandatangan_pkey", ["nip"], { unique: true })
@Entity("tandatangan", { schema: "public" })
export class Tandatangan {
  @Column("character", { primary: true, name: "nip", length: 18 })
  nip!: string;

  @Column("bytea", { name: "tanda_tangan", nullable: true })
  tandaTangan!: Buffer | null;
}
