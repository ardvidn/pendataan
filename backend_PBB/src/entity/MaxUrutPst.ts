import { Column, Entity, Index } from "typeorm";

@Index("max_urut_pst_pkey", ["bundelPelayanan", "kdKantor", "kdKanwil", "noUrutPelayanan", "thnPelayanan"], { unique: true })
@Entity("max_urut_pst", { schema: "public" })
export class MaxUrutPst {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "thn_pelayanan", length: 4 })
  thnPelayanan!: string;

  @Column("character", { primary: true, name: "bundel_pelayanan", length: 4 })
  bundelPelayanan!: string;

  @Column("character", { primary: true, name: "no_urut_pelayanan", length: 3 })
  noUrutPelayanan!: string;
}
