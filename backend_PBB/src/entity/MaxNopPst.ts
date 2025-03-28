import { Column, Entity, Index } from "typeorm";

@Index("max_nop_pst_pkey", ["kdBlok", "kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi"], { unique: true })
@Entity("max_nop_pst", { schema: "public" })
export class MaxNopPst {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { name: "urut_max", length: 4 })
  urutMax!: string;
}
