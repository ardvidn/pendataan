import { Column, Entity, Index } from "typeorm";

@Index("max_stts_pkey", ["thnPajakSppt"], { unique: true })
@Entity("max_stts", { schema: "public" })
export class MaxStts {
  @Column("character", { primary: true, name: "thn_pajak_sppt", length: 4 })
  thnPajakSppt!: string;

  @Column("bigint", { name: "max", nullable: true })
  max!: string | null;
}
