import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { KelasBangunan } from "./KelasBangunan";
import { KelasTanah } from "./KelasTanah";
import { Skp } from "./Skp";

@Index("skp_op_bersama_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "tglTerbitSkp", "thnPajakSkp"], { unique: true })
@Entity("skp_op_bersama", { schema: "public" })
export class SkpOpBersama {
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

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { primary: true, name: "thn_pajak_skp", length: 4 })
  thnPajakSkp!: string;

  @Column("timestamp without time zone", {
    primary: true,
    name: "tgl_terbit_skp",
  })
  tglTerbitSkp!: Date;

  @Column("bigint", { name: "luas_bumi_beban_skp", default: () => "0" })
  luasBumiBebanSkp!: string;

  @Column("bigint", { name: "luas_bng_beban_skp", default: () => "0" })
  luasBngBebanSkp!: string;

  @Column("bigint", { name: "njop_bumi_beban_skp", default: () => "0" })
  njopBumiBebanSkp!: string;

  @Column("bigint", { name: "njop_bng_beban_skp", default: () => "0" })
  njopBngBebanSkp!: string;

  @ManyToOne(() => KelasBangunan, (kelasBangunan) => kelasBangunan.skpOpBersamas)
  @JoinColumn([
    { name: "kd_kls_bng", referencedColumnName: "kdKlsBng" },
    { name: "thn_awal_kls_bng", referencedColumnName: "thnAwalKlsBng" },
  ])
  kelasBangunan!: KelasBangunan;

  @ManyToOne(() => KelasTanah, (kelasTanah) => kelasTanah.skpOpBersamas)
  @JoinColumn([
    { name: "kd_kls_tanah", referencedColumnName: "kdKlsTanah" },
    { name: "thn_awal_kls_tanah", referencedColumnName: "thnAwalKlsTanah" },
  ])
  kelasTanah!: KelasTanah;

  @OneToOne(() => Skp, (skp) => skp.skpOpBersama)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
    { name: "thn_pajak_skp", referencedColumnName: "thnPajakSkp" },
    { name: "tgl_terbit_skp", referencedColumnName: "tglTerbitSkp" },
  ])
  skp!: Skp;
}
